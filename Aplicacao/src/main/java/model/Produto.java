package model;


public class Produto {
	private int id;
	private String email;
	private String senha;
	private String cpf;
	
	public Produto() {
		id = -1;
		email = "";
		senha = "";
		cpf = "";
	}

	public Produto(int id, String email, String senha, String cpf) {
		setId(id);
		setEmail(email);
		setSenha(senha);
		setCpf(cpf);
		
	}		
	
	public int getID() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public String getCpf() {
		return senha;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}



	@Override
	public String toString() {
		return "User: " + email + "   Senha" + senha + "   Cpf: " + cpf ;
	}
	
	@Override
	public boolean equals(Object obj) {
		return (this.getID() == ((Produto) obj).getID());
	}	
}
