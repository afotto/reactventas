//Requiero fs para poder leer archivos y escribirlos
const fs = require ('fs');
//Requiero path para resolver las rutas 
const path = require ('path');

 
//Traigo la info del archivo
const model = function (name) {
    console.log('entre al modelo')
    console.log(name)
    return {

        tablePath: path.resolve(__dirname, '../data', `${name}.json`),//Busco el archivp - falta generalizar para que tb pueda tomar el users
    

        readFile: function() {
            let productsString = fs.readFileSync (this.tablePath, 'utf-8'); //Lo guardo en una variable string
             //Lo paso a js - array
            return JSON.parse(productsString) || [];
            
        },

        all: function () {
            return this.readFile();
        },

    // Averiguo el próximo id
        nextId: function () {
            let rows = this.readFile();
            let lastRow = rows.pop();

            return lastRow.id ? ++lastRow.id : 1;
        },

    // Grabo el array que recibo por parámetro y lo paso a formato Json
        writeFile : function(contents) {
            console.log('entre en writeFile');
            console.log(contents);
            let tableContents = JSON.stringify(contents, null, ' ');
            fs.writeFileSync(this.tablePath, tableContents);
        },

    // agrego un registro que paso por parámetro
        create: function (row) {
            let rows = this.readFile();
            // Averiguo el último id y lo actualizo
            row.id = this.nextId();
            // Agrego en el array
            rows.push(row);
            // grabo el array en el archivo
            this.writeFile(rows);
            //Retorno el último id generado
            return row.id;
        },

        find: function (id) {
            let rows = this.readFile();
            return rows.find (row => row.id == id);
            
        },

        edit: function (row) {
            console.log('entre en productModel.edit');
            console.log(row);
            let rows = this.readFile();
            
            let updateRows = rows.map(oneRow =>{
                if(oneRow.id == row.id){
                    return row;
                }
                return oneRow;
                
            })
            console.log('datos a grabar');
           console.log(updateRows);
            this.writeFile(updateRows);
            
        },

        findByField: function (field, text) {
            let allUsers = this.all();
            let userFound = allUsers.find(oneUser => oneUser[field] === text);
            return userFound;
        },

    delete: function (id) {
        //traigo todos los datos
        console.log('entre en productModel.delete');
        let rows = this.readFile();
        let updateRows = rows.filter ( row =>{
            return row.id != id;
        });
        console.log(id);
        this.writeFile (updateRows);
    }
}}

module.exports = model
