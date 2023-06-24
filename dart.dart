void main() {
  print("hello world");

  //comment

  // static datatypes
  int number = 10;
  String string = "hello";
  bool t = true;
  List list = ["test", 12, "hey"];
  print(number);
  print(string);
  print(t);
  print(list);

  // list operations
  list.add("hello");
  list.remove(12);

  // dynamic datatype
  dynamic a = "hello";
  a = 20;
  print(a);

  // same dataype array
  List<String> test = ["hello", "world"];
  print(test);

  // functions
  String b = getString();
  print(b);
  printStuff();
  print(getValue());

  // classes
  User userOne = User("name1", 20);
  userOne.login();

  SuperClass userTwo = SuperClass("name2", 21);
  userTwo.publish();
  userTwo.login();
}

// functions
String getString() {
  return "hello world";
}

void printStuff() {
  print("hey");
}

// arrow funtion
String getValue() => "arrow function";

// classes
class User {
  // properties
  late String name;
  late int age;

  //contructor
  User(String u, int a) {
    this.name = u;
    this.age = a;
  }

  // methods
  void login() {
    print(this.name);
  }
}

// inheritences
class SuperClass extends User {
  SuperClass(String u, int a) : super(u, a);

  void publish() {
    print("published");
  }
}
