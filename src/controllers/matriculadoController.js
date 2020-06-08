const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM matriculado', (err, filas) => {
     if (err) {
      res.json(err);
     }
     res.render('matriculado', {
        data: filas
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO matriculado set ?', data, (err, filas) => {
      console.log(filas)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { nro_matricula } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM matriculado WHERE nro_matricula = ?", [nro_matricula], (err, filas) => {
      res.render('matriculado_edit', {
        data: filas[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { nro_matricula } = req.params;
  const newMatriculado = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE matriculado set ? WHERE nro_matricula = ?', [newMatriculado, nro_matricula], (err, filas) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { nro_matricula } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM matriculado WHERE nro_matricula = ?', [nro_matricula], (err, filas) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
