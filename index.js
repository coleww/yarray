module.exports = function(array){
  var els = []
  array.forEach(function(val, i){
    var el = document.createElement("input")
    el.setAttribute("type", "text")
    el.setAttribute("data-index", i)
    el.value = val
    el.addEventListener("change", function update(e){
      array[~~e.target.dataset.index] = e.target.value
    });
    els.push(el);
  })
  return {
    update: function(newArr){
      // if(newArr.length !== array.length) throw('stuff')
      array = newArr;
      array.forEach(function(val, i){
        els[i].value = val
      })
    },
    els: els
  }
};