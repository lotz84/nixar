module.exports = (repo, cat)->
  repo.commands.push do
    name: "content"
    desc: "Print file, file lines, file created, file modified"
    input: \line
    output: \lines
    enabled: yes
    doc: 
      examples:
        * ''
        ...
    compile: cat.compile