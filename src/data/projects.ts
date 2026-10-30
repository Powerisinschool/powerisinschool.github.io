export const projects = [
  {
    title: "Swish Kernel",
    stack: "C++ · C · Assembly · CMake",
    href: "https://github.com/Powerisinschool/swish_kernel",
    summary:
      "A 64-bit x86-64 bare-metal kernel with a graphical compositor, input handling, a custom heap allocator, a virtual filesystem and an interactive shell.",
    bullets: [
      "Asynchronous PS/2 keyboard driver talking to the legacy PIC, with ring buffers for non-blocking input.",
      "Double-buffered framebuffer rendering on a custom memory allocator.",
      "Loop-unrolled <code>memcpy</code> moving 32 bytes per iteration, with no external libraries.",
    ],
  },
  {
    title: "blink-rs",
    stack: "Rust · html5ever · cssparser · tiny-skia",
    href: "https://github.com/Powerisinschool/blink-rs",
    summary:
      "An experimental HTML/CSS rendering engine modelled on Chromium’s constraint-driven LayoutNG pipeline.",
    bullets: [
      "Arena-allocated DOM using generational index handles in flat, contiguous memory, with no <code>Rc&lt;RefCell&gt;</code> pointer chasing.",
      "Custom CSS specificity matching, cascading, and a recursive layout pass that resolves constraint spaces into box fragments.",
      "Criterion benchmarks measuring allocation lifecycles across DOM storage layouts.",
    ],
  },
  {
    title: "WebRTC SFU Server",
    stack: "Go · Pion · WebRTC",
    href: undefined,
    summary:
      "A highly concurrent video-conferencing server built from the ground up on the Pion media framework.",
    bullets: [
      "Unit-tested fixed-window rate limiter on a sharded map, absorbing request spikes.",
      "Granular read-write mutexes on peer connections to keep lock contention low and global state thread-safe.",
    ],
  },
];
