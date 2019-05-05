
function a() {
  try {
  b()
  } catch (e) {

  }
  console.log()
}

function b() {
  let result = c()
  console.log('jij')
}

function c() {
  //throw new Error('not enoguh ram')
}

a();
