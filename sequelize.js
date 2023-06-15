const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("julia", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Staff = sequelize.define(
  "Staff",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(["male", "female"]),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "staff",
  }
);

console.log(Staff === sequelize.models.Staff);

(async () => {
  await Staff.sync({ force: false, alter: true });
  //   const galina = await Staff.create({
  //     firstName: "Galina",
  //     lastName: "Yurievna",
  //     gender: "female",
  //     birthday: "1988-10-10",
  //     position: "director",
  //     phone: "89217458899",
  //   });
  const galina = await Staff.findOne({
    where: {
      id: 1,
    },
  });

  await galina.destroy();
  
})();
