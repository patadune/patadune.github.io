var mess = new Array('"Le gars était précis, pas pressé, un peu givré aussi..."', '100% street, 100% glisse, 100% kiff !', 'Propulsé au Sans Plomb 95... Eh ouais.', 'Guidé par des forces obscures...', '"1 mètre 50... D\'accord, mais dans le système métrique international ?"', 'Big up à St-Martin des Champs, Never Forget.', 'Journalier ne signifie pas Quotidien.', 'Updates every onsaipaquand.', 'Un jour j\'aurais peut être un talent de reporter. D\'ici là, va falloir faire avec.', 'Les tribulations d\'un franç... Non, décidement, ça convient pas.', 'La lumière est ma force.', 'Pourquoi ? Je sais pas.', 'Décidement, j\'aurais du faire ça bien avant.', 'Muy caliente en la autopista !');
var max = mess.length;
var num = Math.floor((Math.random() * max));
document.writeln(mess[num]);
