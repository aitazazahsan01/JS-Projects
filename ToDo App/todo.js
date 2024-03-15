                         // TO DO App //
                         
                         let todo = [];

                            let req = prompt("Enter Your Request");
                            while(true)
                            {
                            if(req == "quit")
                             {
                                 console.log("Quitting App");
                                 break;
                             }
                     
                             if(req == "list")
                             {
                                 console.log("_________To-Do-List__________");
                                 for(let i=0; i<todo.length; i++)
                                 {
                                     console.log(i, todo[i]);
                                 }
                                 console.log("________The-End___________");
                             }
                             else if(req == "add")
                             {
                                 let task = prompt("Enter the Task You want to Add");
                                 todo.push(task);
                                 console.log("Task Added");
                             }
                             else if(req == "delete")
                             {
                                 let index = prompt("Enter the Index of Task you want to Delete");
                                 todo.splice(index,1);
                                 console.log("Task Deleted");
                             }
                             else
                             {
                                 console.log("Oopss..! Wrong Request!! Try Again");
                             }
                             req = prompt("Enter Your Request");
                         }



                    // EVENT LISTENEING


















