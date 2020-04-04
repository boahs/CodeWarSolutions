function list(names){
  return names.map(function(x){ return x.name; }).join(", ").replace(/,(?!.*,)/gmi, " &");
}