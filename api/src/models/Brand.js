const { DataTypes } = require("sequelize");

module.exports = (sequielize) => {
  sequielize.define("Brand", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
