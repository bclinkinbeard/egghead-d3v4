# Reuse Transitions in D3

D3 transitions start executing as soon as they’re created, and they’re destroyed once they end. This can present some challenges when attempting to create reusable transitions. This lesson demonstrates how to overcome those challenges using various approaches to reusable transitions.

### [Lesson Code](http://embed.plnkr.co/github/bclinkinbeard/egghead-d3v4/24-reusable-transitions?show=src%2Fapp.js,preview)

### Lesson APIs
- [d3.transition()](https://github.com/d3/d3-transition#transition)
- [transition.call()](https://github.com/d3/d3-transition#transition_call)
- [selection.transition()](https://github.com/d3/d3-transition#selection_transition)
- [transition.duration()](https://github.com/d3/d3-transition#transition_duration)
- [transition.delay()](https://github.com/d3/d3-transition#transition_delay)
- [transition.style()](https://github.com/d3/d3-transition#transition_style)
- [transition.attr()](https://github.com/d3/d3-transition#transition_attr)
