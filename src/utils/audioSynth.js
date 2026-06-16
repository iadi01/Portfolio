class AudioSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.soundEnabled = localStorage.getItem('aadi-sound') !== 'false';
    this.bpm = 85;
    this.timerId = null;
    this.beatIndex = 0;
    this.onBeat = null;
  }

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn("Web Audio API not supported in this browser.", e);
    }
  }

  resume() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch((err) => console.warn("Failed to resume AudioContext", err));
    }
  }

  setSoundEnabled(enabled) {
    this.soundEnabled = enabled;
    localStorage.setItem('aadi-sound', String(enabled));
    if (!enabled && this.isPlaying) {
      this.stopSequencer();
    }
  }

  // Plays a simple synthesized sound tone
  playTone(freq, type, duration, gainStart, gainEnd = 0.001) {
    if (!this.soundEnabled) return;
    this.resume();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gainNode.gain.setValueAtTime(gainStart, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(gainEnd, this.ctx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Error playing audio tone", e);
    }
  }

  playHover() {
    this.playTone(800, 'triangle', 0.03, 0.05);
  }

  playClick() {
    this.playTone(400, 'triangle', 0.08, 0.1);
  }

  playSelect() {
    this.playTone(600, 'sine', 0.12, 0.12);
  }

  playSuccess() {
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.25, 0.12);
      }, idx * 75);
    });
  }

  playStartup() {
    // Beautiful Macintosh style major 9 startup chime
    this.resume();
    const freqs = [130.81, 196.00, 246.94, 329.63, 392.00, 493.88]; // C3, G3, B3, E4, G4, B4
    freqs.forEach((freq) => {
      this.playTone(freq, 'sine', 1.8, 0.06);
    });
  }

  playChirp() {
    this.playTone(880, 'sine', 0.1, 0.12);
    setTimeout(() => {
      this.playTone(1320, 'sine', 0.15, 0.12);
    }, 80);
  }

  // Noise generator for snare drum synthesis
  playNoise(duration, volume) {
    if (!this.soundEnabled || !this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noiseNode = this.ctx.createBufferSource();
      noiseNode.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

      const gainNode = this.ctx.createGain();
      gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      noiseNode.start();
      noiseNode.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Error playing noise", e);
    }
  }

  startSequencer(onBeatCallback) {
    this.resume();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.onBeat = onBeatCallback;
    this.beatIndex = 0;

    const step = () => {
      if (!this.isPlaying) return;
      this.playSequencerStep();
      if (this.onBeat) {
        this.onBeat(this.beatIndex);
      }
      this.beatIndex = (this.beatIndex + 1) % 16;
      const stepDuration = (60 / this.bpm) * 1000 / 2; // 8th note duration
      this.timerId = setTimeout(step, stepDuration);
    };
    step();
  }

  stopSequencer() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  playSequencerStep() {
    if (!this.soundEnabled || !this.ctx) return;

    const bar = Math.floor(this.beatIndex / 8); // 0 or 1
    const stepInBar = this.beatIndex % 8;

    // Cozy synth-pop chord progression: A minor (bar 0) & F major (bar 1)
    const amChord = [220.00, 261.63, 329.63, 440.00]; // A3, C4, E4, A4
    const fChord = [174.61, 220.00, 261.63, 349.23];  // F3, A3, C4, F4
    const activeChord = bar === 0 ? amChord : fChord;

    // 1. Bassline (Kick pulse) on 1st and 5th beat
    if (stepInBar === 0 || stepInBar === 4) {
      const rootNote = bar === 0 ? 110.00 : 87.31; // A2 or F2
      this.playTone(rootNote, 'sine', 0.2, 0.18);
    }

    // 2. White noise snare hit on step 4
    if (stepInBar === 4) {
      this.playNoise(0.08, 0.08);
    }

    // 3. High hat click on odd steps
    if (stepInBar % 2 === 1) {
      this.playTone(8000, 'sine', 0.015, 0.02);
    }

    // 4. Melodic chord arpeggiator notes
    if (stepInBar === 0) {
      this.playTone(activeChord[0], 'triangle', 0.35, 0.08);
    } else if (stepInBar === 2) {
      this.playTone(activeChord[1], 'triangle', 0.25, 0.07);
    } else if (stepInBar === 4) {
      this.playTone(activeChord[2], 'triangle', 0.35, 0.08);
    } else if (stepInBar === 6) {
      this.playTone(activeChord[3], 'triangle', 0.25, 0.07);
    }
  }
}

export const audioSynth = new AudioSynth();
