package com.Adecco.gesmag.mouvment;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface mouvementRepository extends JpaRepository<Mouvement, UUID> {
	Optional<Mouvement> findByNomeCliente(String nomeCliente);

	Optional<Mouvement> findByCodiceMovimento(String codiceMovimento);
}
