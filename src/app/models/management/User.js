/* eslint-disable no-param-reassign */
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const { Model } = Sequelize;

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      password: Sequelize.VIRTUAL,
    }, {
      sequelize,
      tableName: 'user',
      schema: 'management',
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }


  static associate(models) {
    // this.belongsTo(models.TipoUsuario, { foreignKey: 'id_tipo_usuario', as: 'tipoUsuario' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;
