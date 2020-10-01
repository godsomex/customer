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

  const getCustomer = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        return res.status(404).send({ msg: "Customer not found" });
      }

      res.json(customer);
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
        last_contact: new Date(last_contact).toISOString(),
        birthday: new Date(birthday).toISOString(),
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
    if (req.body.last_contact)
      fields.last_contact = new Date(req.body.last_contact).toISOString();
    if (req.body.birthday)
      fields.birthday = new Date(req.body.birthday).toISOString();
    if (req.body.value) fields.value = req.body.value;

    try {
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
    } catch (error) {
      console.log("Error occurred: ", error);
      res.status(500).send(error.message);
    }
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

  return {
    getCustomers,
    getCustomer,
    postCustomers,
    updateCustomers,
    deleteCustomers,
  };
}

module.exports = createHandlers;
