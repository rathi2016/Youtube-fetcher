module Singable
  def sing
    "I'm #{self.name}, and I'm singing!"
  end
end

class Person
  include Singable
  attr_accessor:name
  @@crowd = 0
  def initialize(name)
    @name=name
     @@crowd += 1
  end

  def existential_crisis
   self
 end

 def self.population
   @@crowd
 end
end

Rathi = Person.new("Rathi")
a = Person.new("Aaron")
# a.population
puts Person.population
