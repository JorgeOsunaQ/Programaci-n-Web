const Sequelize=require("sequelize");

module.exports=(sequelize)=>sequelize.define(
    "User",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement:true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
        },
        name: {
            type: Sequelize.STRING,
        },
        lastname: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        }
    }
)