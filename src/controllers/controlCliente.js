const controller = {};

//funcion de lectura de tabla 'users'
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM preguntas", (err, preguntas) => {
      if (err) {
        res.json(err);
      }

      res.render("preguntas", {
        data: preguntas,
      });
    });
  });
};

//funcion de creacion de usuarios
controller.save = (req, res) => {
  const datos = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO preguntas set ?", [datos], (err, cities) => {
      console.log(cities);
      res.redirect("/");
    });
  });
};

//Funcion de modificacion de preguntas
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM preguntas WHERE id =?",
      [id],
      (err, preguntas) => {
        res.render("preguntas_editar", {
          data: preguntas[0],
        });
      }
    );
  });
};

//Funcion de actualizacion de preguntas
controller.update = (req, res) => {
  const { id } = req.params;
  const nuevaPregunta = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE preguntas set ? WHERE id=?",
      [nuevaPregunta, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

//Funcion para borrar preguntas
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM preguntas WHERE id = ?", [id], (err, preguntas) => {
      res.redirect("/");
    });
  });
};

//export
module.exports = controller;
