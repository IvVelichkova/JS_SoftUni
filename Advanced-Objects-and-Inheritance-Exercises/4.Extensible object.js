/*Create an object that can clone the functionality of another object into itself.
Implement an extend(template) function that would copy all of the properties of template
to the parent object and if the property is a function, add it to the object’s prototype instead.
Input / Output
Your code should return the extensible object instance.
The extend() function of your object will receive a valid object as input parameter, and has no output.
*/
function getExtencibleObject(  ) {
	let obj={
		extend: (template)=>{
			 for (let prop in template) {
			         if(typeof template[prop]==='function'){
			             Object.getPrototypeOf(obj)[prop]=template[prop];
			           }else{
			              obj[prop]=template[prop];
			             }
			     }
		}
	}
	return obj;
}
