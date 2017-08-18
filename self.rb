module Singable
  def sing
    "I'm #{self.name}, and I'm singing!"
  end
end

class Person
  include Singable
  attr_accessor:name

  def initialize(name)
    @name=name
  end
end

Rathi = Person.new("Rathi")
puts Shane.sing
