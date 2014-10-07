(function () {
  var width = 500,
      height = 500;

  //better names/info to carry around?
  //need to actually be tokens?
  var data = [
    { text: "1 + 2",
      type: "addition" }
  ];

  var svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height)
    .append('g')
      .attr('transform', 'translate(32,' + height / 2 + ')');

  function update(data) {
    var text = svg.selectAll('text')
      .data(data);

    text.enter().append('text');

    text.attr('x', function(d,i) { return i * 32; })
      .attr('dy', '.35em');

    text.text(function(d) { return d.text; });

    text.exit().remove();
  }

  update(data);

  setTimeout(function () {
    update([
      { text: "3",
        type: "primitive" }
    ]);
  }, 1000);

})();
