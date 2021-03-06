// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "lower",
      desc: "make lowercase",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, input){
          return (input != null ? input : "").toLowerCase();
        };
      }
    });
  };
}).call(this);
