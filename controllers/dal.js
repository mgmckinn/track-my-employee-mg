const consoleTable = require('console.table'); 
const connection = require('../config/connection');

const dal = {
    viewAll: function(query) {
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if (err) return reject(err);
                console.log('\n');
                console.table(result);
                console.log('\n');
                resolve(result);
            });
        });
    },
viewAllBy: function(query, colToSearch, valueOfCol) {
    return new Promise((resolve, reject) => {
            connection.query(query, [colToSearch, valueOfCol], (err, result) => {
                if (err) return reject(err);
                console.log('\n');
                console.table(result);
                console.log('\n');
                resolve(result);
            })
        })

    },

    deleteFrom:function(query, table, condition) {
        return new Promise((resolve, reject) => {
            connection.query(query, [table, condition], (err, result) => {
                if (err) return reject(err);
                if (table === 'employees') {
                    console.log('EMPLOYEE has been deleted from database. \n');
                } else if (table === 'roles') {
                    console.log('ROLE has been deleted from database. \n');
                } else {
                    console.log('DEPARTMENT has been deleted from database. \n');
                }
                
                resolve(result);
            })
        })
    }
};

module.exports = dal;