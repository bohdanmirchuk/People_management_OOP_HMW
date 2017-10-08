//adding year into select
for (var year = 1900; year <= 2017; year++){
  $('#birthdate-cnt select[name="birthyear"]').append('<option value="'+year+'">'+year+'</option>');
}
//adding days into select
for (var day = 1; day <= 31; day++){
  $('#birthdate-cnt select[name="birthday"]').append('<option value="'+day+'">'+day+'</option>');
}

function SuperUser(){}

SuperUser.prototype.changeDataVisibility = function(){
  if (this.isDataVisible){
    $(event.target.parentElement.children).css('color', '#555');
    $(event.target.parentElement.children[0]).css('color', '#fff');
    this.isDataVisible = !this.isDataVisible}
    else{
    $(event.target.parentElement.children).css('color', '#fff');
    this.isDataVisible = !this.isDataVisible
    }
}

//constructor Person
function Person(name, sex, birthdate, address, phone, email){
  this.name = name;
  this.sex = sex;
  this.birthdate = birthdate;
  this.address = address;
  this.phone = phone;
  this.email = email;
  this.isDataVisible = true;
  
}

Person.prototype = Object.create(SuperUser.prototype);

//array persons
var persons = [];

//calling the function addPerson
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
  renderPerson();
  cleanForm();
  
  return false;
}

function renderPerson(){
  $('tbody').html('');
  _.each(persons, function(element, index){
    $('tbody').append('<tr class="traw"><td>'+element.name+'</td><td>'+element.sex+'</td><td>'+element.birthdate+'</td><td>'+element.address+'</td><td>'+element.phone+'</td><td>'+element.email+'</td></tr>');
    
  })
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

$('tbody').on('click', function(event){
  var index = event.target.parentElement.rowIndex;
    persons[index-1].changeDataVisibility();
})



