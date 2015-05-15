var tap = require('tape')
var yarray = require('./')

function triggerChange(el, value){
  el.value = value
  var evt = document.createEvent("HTMLEvents")
  evt.initEvent("change", false, true)
  el.dispatchEvent(evt)
}

tap.test('binds all the things', function(t){
  t.plan(5)
  var one = ['1', '2', '3']
  var two = ['4', '5', '6']

  var yarrBound = yarray(one)
  var els = yarrBound.els
  var update = yarrBound.update

  var oneVals = els.map(function(els){
    return els.value
  })
  t.looseEqual(oneVals, ['1', '2', '3'], 'elements initialized with array vals')

  triggerChange(els[0], 'foo')
  t.looseEqual(one, ['foo', '2', '3'], 'array is updated by input')

  update(two)

  var twoVals = els.map(function(els){
    return els.value
  })
  t.looseEqual(twoVals, ['4', '5', '6'], 'elements updated with new array vals')

  triggerChange(els[2], 'bar')
  t.looseEqual(two, ['4', '5', 'bar'], 'new array is updated by input')
  t.looseEqual(one, ['foo', '2', '3'], 'old array is left alone')
})

tap.test('throws error if updated array lengths do not match', function(t){
  t.plan(1)
  var one = ['1', '2', '3']
  var two = ['4', '5', '6', '7']

  var yarrBound = yarray(one)
  var update = yarrBound.update
  t.throws(function(){update(two)})
})