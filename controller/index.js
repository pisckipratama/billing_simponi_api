const { Billing } = require('../models');
const respons = {
  simponi_result: {
    method: "activeinquiry_minerba",
    data: []
  }
}

const addData = async (req, res) => {
  const { KD_BILLING, NTPN } = req.body;

  try {
    // Cek Kode Billing dan Kode NTPN apakah sudah ada di DB
    const billingCheck = await Billing.findAll({
      where: { KD_BILLING, NTPN }
    });

    if (billingCheck.length === 1) {
      respons.simponi_result.data[0] = KD_BILLING;
      respons.simponi_result.data[1] = NTPN;
      respons.simponi_result.response_code = "2";
      return res.json(respons);
    }

    // Create jika Billing dan NTPN kode tidak ada di DB
    const addBilling = await Billing.create(req.body);
    respons.simponi_result.data[0] = addBilling.KD_BILLING;
    respons.simponi_result.data[1] = addBilling.NTPN;
    respons.simponi_result.response_code = "3";
    return res.json(respons);

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: error.message });
  }
}

const addDataOld = (req, res) => {
  let [KD_BILLING, NTPN] = JSON.parse(req.body.data);
  console.log(KD_BILLING);
  try {
    Billing.findByPk({ where: { KD_BILLING, NTPN } }).then((result) => {
      if (result) {
        res.status(409).json({
          simponi_result: {
            method: 'activeinquiry_minerba',
            data: [KD_BILLING, NTPN],
            response_code: '2',
          },
        });
      } else {
        Billing.create({ KD_BILLING, NTPN }).then(() => {
          res.status(201).json({
            simponi_result: {
              method: 'activeinquiry_minerba',
              data: [KD_BILLING, NTPN],
              response_code: '3',
            },
          });
        });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getAllData = async (req, res) => {
  try {
    const data = await Billing.findAll();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteData = async (req, res) => {
  try {
    const user = await Billing.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'User Deleted!' });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addData,
  getAllData,
  deleteData,
};
