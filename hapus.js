const   input   = require('inquirer'),
        fs      = require('fs')

console.log("\x1b[37m");
console.log("########################");
console.log("|___ Clean Software ___|");
console.log("|_____ 100% CLEAN _____|");
console.log("|______ root@int ______|");
console.log("########################");
console.log("*_");
console.log("  |-> 1 for Delete File");
console.log("  |-> 2 for Delete All File On Folder");
console.log("  |-> H for Help");
input.prompt([
    {
        type: 'expand',
        name: 'tipe',
        message: 'Input :',
        choices: [
            {key: '1',value: 'file',},
            {key: '2',value: 'folder',}
        ],
    },
])
.then(konfir => {
    var x = konfir.tipe
    input.prompt([
        { name: 'dvc', message: 'Input Part ex (C: or F: or G: etc..) : ', }  
    ]).then(device => {  
        let dvc = device.dvc
        if(dvc.length > 2 || dvc.includes(":") == false){
            console.log("\x1b[31m" , "[ERROR] Incorrect !");
            console.log("\x1b[37m");
        }else{
            if(fs.existsSync(dvc+'/SAMPAH') == false){
                console.log("create Folder SAMPAH ....");
                fs.mkdirSync(dvc+'/SAMPAH');
            }
            //MAIN
                if(x == 'file'){
                    input.prompt([
                        { name: 'file', message: 'Input You Location File "'+dvc+'/bla/bla/bla/file.txt" : ', }  
                    ]).then(inputan => {  
                        var Files = inputan.file
                        if(Files.includes(dvc) == true){
                            fs.writeFileSync(Files,' ')
                            fs.rename(Files, dvc+'/SAMPAH/0x00'+Math.random()*Math.floor(123), function (err) {
                                if (err) throw err
                                console.log("\x1b[33m" , '[INFO] File '+Files+' success')
                                console.log("\x1b[37m");
                            })
                        }else{
                            console.log("\x1b[31m" , "[ERROR] Enter like "+dvc+"/bla/bla/bla/file.txt");
                            console.log("\x1b[37m");
                        }                
                    })
                }else{  
                    
                    function hapos(){
                        input.prompt([
                            { name: 'path', message: 'Input You Location Folder "'+dvc+'/bla/bla/bla" : ', }  
                        ]).then(inputan => {  
                            var folder = inputan.path  
                            if(folder.includes(dvc) == true){
                                console.log("\x1b[36m","Will REMOVE '"+folder+"' 100%");
                                console.log("\x1b[36m","======================================================");
                                input.prompt([
                                    { name: 'y', message: 'are you sure ? y/n : ', }  
                                ]).then(ert => {  
                                    if(ert.y == 'y'){
                                        const excDir = async (isiReadIn) => {
                                            detailFolder = fs.readdirSync(isiReadIn);
                                            detailFolder.forEach(isiDetailFolder => {
                                                let fullDetailFolder = isiReadIn + "\\" + isiDetailFolder
                                                if(fs.lstatSync(fullDetailFolder).isFile()){
                                                    console.log("\x1b[32m","| => "+fullDetailFolder);
                                                    //FORMAT HAPUS 
                                                    if(fullDetailFolder.indexOf('.tmp')> 1){
                                                        //-
                                                        fs.writeFileSync(fullDetailFolder,' ')
                                                        fs.rename(fullDetailFolder, dvc+'/SAMPAH/0x00'+Math.random()*Math.floor(123), function (err) {
                                                            if (err){console.log("\x1b[31m" , "[ERROR] "+ fullDetailFolder+' When Removing '); throw err}
                                                        })
                                                        //-
                                                    }
                                                    //END FORMAT HAPUS
                                                }else{
                                                    excDir(fullDetailFolder)
                                                }
                                            })
                                        }
                                        
                                        excDir(inputan.path)
                                        console.log("\x1b[36m","======================================================");
        
                                        input.prompt([
                                            { name: 'y', message: 'retry ? y/n : ', }  
                                        ]).then(xz => {  
                                            if(xz.y == 'y'){
                                                hapos()
                                            }else{
                                                console.log("Dev. Muhamad Fathoni");      
                                            }
                                        })
                                    }else{
                                        console.log("Canceled");      
                                    }
                                })
                            }else{
                                console.log("Enter  "+dvc+"/folder/saya/");
                            }                    
                        })
                    }
                    hapos()
                }   
            // TUTUP
        }
    })
})

// // Develop By. Muhamad Fathoni
// // root@Panic:~#
// // IG : @rootint_
