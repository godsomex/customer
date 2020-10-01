function createHandlers({ Customer }) {
  const getCustomers = async (req, res) => {
    try {
      const customers = await Customer.find();
      res.send(customers);
    } catch (error) {
      console.log("Error occurred: ", error);
      res.status(500).send(error.message);
    }
  };

  const postCustomers = async (req, res) => {
    const { name, gender, last_contact, birthday, value } = req.body;
    try {
      const newCustomer = new Customer({
        name,
        gender,
        last_contact,
        birthday,
        value,
      });

      const customer = await newCustomer.save();
      res.send(customer);
    } catch (error) {
      console.log("Error occurred: ", error);
      res.status(500).send(error.message);
    }
  };

  const updateCustomers = async (req, res) => {
    const id = req.params.id;
    const fields = {};

    if (req.body.name) fields.name = req.body.name;
    if (req.body.gender) fields.gender = req.body.gender;
    if (req.body.last_contact) fields.last_contact = req.body.last_contact;
    if (req.body.birthday) fields.birthday = req.body.birthday;
    if (req.body.value) fields.value = req.body.value;

    const customer = await Customer.findOneAndUpdate(
      { _id: id },
      { $set: fields },
      {
        new: true,
      }
    ).exec();

    res.status(200).send({
      message: "item updated",
      customer,
    });
  };

  const deleteCustomers = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      await customer.remove();

      res.send({ success: true });
    } catch (error) {
      console.log("Error occurred: ", error);
      res.status(500).send(error.message);
    }
  };

  return { getCustomers, postCustomers, updateCustomers, deleteCustomers };
}

module.exports = createHandlers;
