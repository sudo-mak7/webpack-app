import $ from 'jquery'

$('<h1 />')
.text('Hello world from jQuery!')
.css({
  textAlign: 'center',
  color: '#8383ff'
})
.appendTo($('header'))