for (var year = 1900; year <= 2017; year++){
  $('#birthdate-cnt select[name="birthyear"]').append('<option value="'+year+'">'+year+'</option>');
}

function Person(name, sex, birthdate, address, phone, email){
  this.name = name;
  this.sex = sex;
  this.birthdate = birthdate;
  this.address = address;
  this.phone = phone;
  this.email = email;
  
}
var persons = [];

$('form').on('submit', addPerson);

  function addPerson(){
  var name = $('input[name="name"]').val();
  var sex = $('select[name="sex"]').val();
  var birthday = $('select[name="birthday"]').val();
  var birthmonth = $('select[name="birthmonth"]').val();
  var birthyear = $('select[name="birthyear"]').val();
  var address = $('input[name="address"]').val();
  var phone = $('input[name="phone"]').val();
  var email = $('input[name="email"]').val();
  var newbie = new Person(name, sex, birthday+'-'+birthmonth+'-'+birthyear, address, phone, email);
  persons.push(newbie)
  renderPerson(newbie);
  cleanForm();
  console.log(persons.indexOf(newbie));
  return false;

}

function renderPerson(Person){
  console.log(persons)
  $('tbody').append('<tr><td>'+Person.name+'</td><td>'+Person.sex+'</td><td>'+Person.birthdate+'</td><td>'+Person.address+'</td><td>'+Person.phone+'</td><td>'+Person.email+'</td></tr>');
  

  console.log(Person.name);
}

function cleanForm(){
  $('input[name="name"]').val('');
  $('select[name="sex"]').val('');
  $('select[name="birthday"]').val('');
  $('select[name="birthmonth"]').val('');
  $('select[name="birthyear"]').val('');
  $('input[name="address"]').val('');
  $('input[name="phone"]').val('');
  $('input[name="email"]').val('');
};