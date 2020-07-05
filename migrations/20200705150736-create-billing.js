'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Billings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      KD_BILLING: {
        type: Sequelize.STRING
      },
      NTPN: {
        type: Sequelize.STRING
      },
      NPWP: {
        type: Sequelize.STRING
      },
      TRX_TGL_KONTRAK: {
        type: Sequelize.DATE
      },
      TRX_KMDT_JUAL: {
        type: Sequelize.STRING
      },
      TRX_MTD_BYR: {
        type: Sequelize.STRING
      },
      TRX_TGL_KAPAL: {
        type: Sequelize.DATE
      },
      TRX_KURS_BI: {
        type: Sequelize.FLOAT
      },
      KN_TONASE: {
        type: Sequelize.FLOAT
      },
      KN_ASAL: {
        type: Sequelize.STRING
      },
      KN_UNIT_MASS: {
        type: Sequelize.FLOAT
      },
      KL_KALORI: {
        type: Sequelize.FLOAT
      },
      KL_MOIS_TOT: {
        type: Sequelize.FLOAT
      },
      KL_MOIS_INH: {
        type: Sequelize.FLOAT
      },
      KL_SULF_TOT: {
        type: Sequelize.FLOAT
      },
      KL_ASH: {
        type: Sequelize.FLOAT
      },
      BP_TTK_JUAL: {
        type: Sequelize.STRING
      },
      BPBG_UKR_TGK: {
        type: Sequelize.FLOAT
      },
      BPBG_JT_TGK: {
        type: Sequelize.FLOAT
      },
      BPBG_BIAYA_TOT: {
        type: Sequelize.FLOAT
      },
      BPTR_BIAYA_TR: {
        type: Sequelize.FLOAT
      },
      BPTR_BIAYA_TOT: {
        type: Sequelize.FLOAT
      },
      BPTR_BIAYA_TOTHIT: {
        type: Sequelize.FLOAT
      },
      DP_STATUS: {
        type: Sequelize.STRING
      },
      DP_PEMBELI: {
        type: Sequelize.STRING
      },
      DPLK_PLB_ASL: {
        type: Sequelize.STRING
      },
      DPLK_PLB_AKH: {
        type: Sequelize.STRING
      },
      DPKV_NAMA: {
        type: Sequelize.STRING
      },
      DPKT_BENDERA: {
        type: Sequelize.STRING
      },
      DPKT_NAMA: {
        type: Sequelize.STRING
      },
      DPTB_BENDERA: {
        type: Sequelize.STRING
      },
      DPTB_NAMA: {
        type: Sequelize.STRING
      },
      DRHA_KMDT_JUAL: {
        type: Sequelize.STRING
      },
      DRHA_ACUAN: {
        type: Sequelize.STRING
      },
      DRHA_NILAI: {
        type: Sequelize.FLOAT
      },
      DRPR_HRG_ACU: {
        type: Sequelize.FLOAT
      },
      DRPR_BP_TOT: {
        type: Sequelize.FLOAT
      },
      DRPR_HD_RYL: {
        type: Sequelize.FLOAT
      },
      DRPR_HJ_PERUSH: {
        type: Sequelize.FLOAT
      },
      DRPR_TARIF: {
        type: Sequelize.FLOAT
      },
      DRPR_RYL_TOT: {
        type: Sequelize.FLOAT
      },
      DRPR_RP_BYR: {
        type: Sequelize.FLOAT
      },
      DRPR_PHT_BYR: {
        type: Sequelize.FLOAT
      },
      DRPR_RYLFIN_HIT: {
        type: Sequelize.FLOAT
      },
      DRPR_PHTFIN_HIT: {
        type: Sequelize.FLOAT
      },
      DRPR_DENDA: {
        type: Sequelize.FLOAT
      },
      DRPR_DENDA_PHT: {
        type: Sequelize.FLOAT
      },
      DRPR_RYLFIN_TOT: {
        type: Sequelize.FLOAT
      },
      DRPR_PHTFIN_TOT: {
        type: Sequelize.FLOAT
      },
      DRPR_KET: {
        type: Sequelize.STRING
      },
      DRPR_KURLEB: {
        type: Sequelize.FLOAT
      },
      DRPR_TGLSUBMIT: {
        type: Sequelize.DATE
      },
      DRPR_NMPERUSH: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Billings');
  }
};