const not = 'AA';

// if (not === 'AA') {
//
// } else if (not === 'BA') {
//
// } else if (not === 'BB') {
//
// } else if (not === 'CB') {
//
// } else if (not === 'CC') {
//
// } else {
//
// }

switch (not) {
  case 'AA': {
    console.log('En başarılı sensin');
   break;
  }
  case 'BA': {
    console.log('Süper not');
    break;
  }
  case 'BB' : {
    console.log('Güzel not');
    break;
  }
  case 'CB' : {
    console.log('İdare eder');
    break;
  }
  case 'CC' : {
    console.log('Hadi yine iyisin geçtin dersi');
    break;
  }
  default: {
    console.log('Hoba');
    break;
  }
}
