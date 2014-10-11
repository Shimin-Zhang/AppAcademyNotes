:js :syntax

1. Variables

* Variables Are Declared With :var Keyword Before Name Of Variable. # Name of variable after var must not start with number or with -. Their default scope is global, unless inside a function. 

2. Functions

* Function Can Be Anynomous In Javascipt And Simply Be Declared As Function(argument) { block of code; }. 

* There Are 5 Basic Ways To Call A Function In Javascript : 

- Function Style : ie. functionName() The Keyword :this Inside The Function Is The Global Object, One Can Think Of These As Special Attribute Functions Of The Global Object. 

- Method Style : ie Object.function() The :this Inside Function Declaration Is The Object Calling It. 

- Constructor Style : ie new constructorFunction The Function Returns A New Object And :this Inside The Function Points To This New Object. Also Sets Protoptype Of The ClassName.Prototype Object. 

- With Apply : ie functionName.apply(object, [arguments]) It Is Almost Like Calling Function Objects .Bind:() Method While Calling It Regularly. 

- With Call : ie functionName.call(object, arg1, arg2, ...) Very Similar To Apply. 

3. Arguments 

* Javascript Functions Will Happily Take Both More And Less :arguments Than Their Definitions States. If More Functions Are Included They Will Be Available In A Special :arguments Array. If Less Arguments Are Included They Will Be :undefined. 

* Like The :this Keyword, :arguments Is Reset Whenever A New Functinal Scope Is Created. However, :arguments Is Not A True Array And Can Only Be Indexed/.Length On. #we can use array.prototype.slice to make an array copy though. 


