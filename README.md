# Better D3 Code Organization with selection.call()

Most of D3’s native selection APIs also return the selection (or a new selection), to enable multiple method calls to be chained together. Since the code you write isn’t on the selection prototype, chaining your methods would take some extra work. `selection.call()` will call any function reference you give it, providing the selection as the first parameter, and then it returns the selection for you to ensure chaining is supported.

### [Lesson Code](http://embed.plnkr.co/github/bclinkinbeard/egghead-d3v4/14-selection-call?show=src%2Fapp.js,preview)

### Lesson APIs
- [d3.select](https://github.com/d3/d3-selection/blob/master/README.md#select)
- [d3.selectAll](https://github.com/d3/d3-selection/blob/master/README.md#selectAll)
- [selection.call](https://github.com/d3/d3-selection/blob/master/README.md#selection_call)
- [selection.on](https://github.com/d3/d3-selection/blob/master/README.md#selection_on)
- [selection.data](https://github.com/d3/d3-selection/blob/master/README.md#selection_data)
- [selection.enter](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter)
- [selection.append](https://github.com/d3/d3-selection/blob/master/README.md#selection_append)
- [selection.attr](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr)
- [selection.style](https://github.com/d3/d3-selection/blob/master/README.md#selection_style)
- [selection.text](https://github.com/d3/d3-selection/blob/master/README.md#selection_text)
