1. install tailwind css 
2. using children keyword can destructure it used for container component 
3. same class using for different element that we can make it reusable by using one single className and inside the classname i can declare multiple properties 
    .toggle-btn {
    @apply bg-white text-black p-5;
}

like that i can use tailwind css classname 
4. if i want i can conditional rendering in className . here i have to use template string to conditional rendering .

5. if any class used for any element and later try to change it by using js then browser will give more priority to the  index.css file class for this reason i have to use (!) bang sign to give more priority to js className . 

!bg-purple-500 

6. lifting status is the technique that i will handle the state from parent to child . from parent i can sent state and destructure in child  this is call lifting status like 2 way data binding 

7. i can using map mathod to load mutiple element and show to the UI . 
    arr.map((element , index , array) =>{
        console.log(element)
        console.log(index)
        console.log(array)
    } )


8. here i create a container component that is common for each content where i can recieve content as childred and and can use for different section 

