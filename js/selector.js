'use strict'

// Funcion que retorna un nodo del html, por medio del selector e identificador
function $(selector) {
	try {
		const char = selector.charAt(0)
		switch (char) {
			case '#':
				return document.querySelector([selector])
			default:
				return document.querySelectorAll([selector])
		}
	} catch (error) {
		return error
	}
}

// Funcion que carga un string como un nuevo nodo dentro de un nodo padre.
function append(fatherNode, stringNode) {
	try {
		const node = document.createRange().createContextualFragment(stringNode)
		fatherNode.appendChild(node)
	} catch (error) {
		return error
	}
}
