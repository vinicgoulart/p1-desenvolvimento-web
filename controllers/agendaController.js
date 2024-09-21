import { db } from '../db.js';

export const getAgendas = (req, res) => {
    const query = "SELECT * FROM tb_agenda ORDER BY nome";

    db.query(query, (error, data) => {
        if(error) return res.status(500).json(error);

        return res.status(200).json(data);
    });
};

export const addAgenda = (req, res) => {
    const query = "INSERT INTO tb_agenda(`nome`, `endereco`, `telefone`, `email`, `data_nasc`) VALUES (?)";

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
        req.body.email,
        req.body.data_nasc
    ];

    db.query(query, [values], (error) => {
        if(error) return res.status(500).json(error);

        res.status(200).json("Registro criado com sucesso");
    });
};

export const updateAgenda = (req, res) => {
    const query = "UPDATE tb_agenda SET `nome` = ?, `endereco` = ?, `telefone` = ?, `email` = ?, `data_nasc` = ? WHERE `codigo` = ?";

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
        req.body.email,
        req.body.data_nasc
    ];

    db.query(query, [...values, req.params.cod], (error) => {
        if(error) return res.status(500).json(error);

        return res.status(200).json("Registro atualizado com sucesso");
    });
};

export const deleteAgenda = (req, res) => {
    const query = "DELETE FROM tb_agenda WHERE `codigo` = ?";

    db.query(query, [req.params.cod], (error) => {
        if(error) return res.status(500).json(error);

        return res.status(200).json("Sucesso ao deletar o registro!");
    });
};

export const getSingleAgenda = (req, res) => {
    const query = "SELECT * FROM tb_agenda WHERE `codigo` = ?";

    db.query(query, [req.params.cod], (error, data) => {
        if(error) return res.status(500).json(error);

        return res.status(200).json(data);
    })
}