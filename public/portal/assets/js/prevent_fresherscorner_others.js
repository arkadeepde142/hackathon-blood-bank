firebase.auth().onAuthStateChanged(function(user) {
    if(user)
    {
       var rootRef = firebase.database().ref().child("Users");
       var userid = firebase.auth().currentUser.uid;
       var userref = rootRef.child(userid);
       var yearref = userref.child("Year");
    
       
       

          
       
          yearref.once('value', function(datasnapshot)
          {
            console.log(datasnapshot.val());
            if(datasnapshot.val()=="Freshers of 2020")
            {
                //Condition satisfied.
                console.log(datasnapshot.val());

            }
            
            else if(datasnapshot.val()==null || datasnapshot.val()=="Second Year" || datasnapshot.val()=="Third Year" || datasnapshot.val()=="Fourth Year" )
            {
                //Redirect to dashboard.
                window.location="userdashboard.html";
            }
    
    
          });

          
       
       
       
       
    
    
    
    }
    else{
       console.log('User not signed in');
    }
    
    
    
    
    
    
    
    
    
    
    });
    