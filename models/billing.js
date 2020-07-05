'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Billing.init({
    KD_BILLING: DataTypes.STRING,
    NTPN: DataTypes.STRING,
    NPWP: DataTypes.STRING,
    TRX_TGL_KONTRAK: DataTypes.DATE,
    TRX_KMDT_JUAL: DataTypes.STRING,
    TRX_MTD_BYR: DataTypes.STRING,
    TRX_TGL_KAPAL: DataTypes.DATE,
    TRX_KURS_BI: DataTypes.FLOAT,
    KN_TONASE: DataTypes.FLOAT,
    KN_ASAL: DataTypes.STRING,
    KN_UNIT_MASS: DataTypes.FLOAT,
    KL_KALORI: DataTypes.FLOAT,
    KL_MOIS_TOT: DataTypes.FLOAT,
    KL_MOIS_INH: DataTypes.FLOAT,
    KL_SULF_TOT: DataTypes.FLOAT,
    KL_ASH: DataTypes.FLOAT,
    BP_TTK_JUAL: DataTypes.STRING,
    BPBG_UKR_TGK: DataTypes.FLOAT,
    BPBG_JT_TGK: DataTypes.FLOAT,
    BPBG_BIAYA_TOT: DataTypes.FLOAT,
    BPTR_BIAYA_TR: DataTypes.FLOAT,
    BPTR_BIAYA_TOT: DataTypes.FLOAT,
    BPTR_BIAYA_TOTHIT: DataTypes.FLOAT,
    DP_STATUS: DataTypes.STRING,
    DP_PEMBELI: DataTypes.STRING,
    DPLK_PLB_ASL: DataTypes.STRING,
    DPLK_PLB_AKH: DataTypes.STRING,
    DPKV_NAMA: DataTypes.STRING,
    DPKT_BENDERA: DataTypes.STRING,
    DPKT_NAMA: DataTypes.STRING,
    DPTB_BENDERA: DataTypes.STRING,
    DPTB_NAMA: DataTypes.STRING,
    DRHA_KMDT_JUAL: DataTypes.STRING,
    DRHA_ACUAN: DataTypes.STRING,
    DRHA_NILAI: DataTypes.FLOAT,
    DRPR_HRG_ACU: DataTypes.FLOAT,
    DRPR_BP_TOT: DataTypes.FLOAT,
    DRPR_HD_RYL: DataTypes.FLOAT,
    DRPR_HJ_PERUSH: DataTypes.FLOAT,
    DRPR_TARIF: DataTypes.FLOAT,
    DRPR_RYL_TOT: DataTypes.FLOAT,
    DRPR_RP_BYR: DataTypes.FLOAT,
    DRPR_PHT_BYR: DataTypes.FLOAT,
    DRPR_RYLFIN_HIT: DataTypes.FLOAT,
    DRPR_PHTFIN_HIT: DataTypes.FLOAT,
    DRPR_DENDA: DataTypes.FLOAT,
    DRPR_DENDA_PHT: DataTypes.FLOAT,
    DRPR_RYLFIN_TOT: DataTypes.FLOAT,
    DRPR_PHTFIN_TOT: DataTypes.FLOAT,
    DRPR_KET: DataTypes.STRING,
    DRPR_KURLEB: DataTypes.FLOAT,
    DRPR_TGLSUBMIT: DataTypes.DATE,
    DRPR_NMPERUSH: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Billing',
  });
  return Billing;
};