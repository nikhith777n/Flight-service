package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="flights")
public class flight {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="source")
	private String source;
	@Column(name="destination")
	private String destination;
	@Column(name="Aid")
	private String aid;
	@Column(name="tseats")
	private int tseats;
	@Column(name="price")
	private int price;
	@Column(name="avais")
	private int as;
	
	public flight()
	{

	}
	public flight(String source, String destination, int tseats,int price,int as,String aid) {
		super();
		this.source = source;
		this.destination = destination;
		this.tseats = tseats;
		this.price=price;
		this.as=as;
		this.aid=aid;
	}
	public String getAid() {
		return aid;
	}
	public void setAid(String aid) {
		this.aid = aid;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getAs() {
		return as;
	}
	public void setAs(int as) {
		this.as = as;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getTseats() {
		return tseats;
	}
	public void setTseats(int tseats) {
		this.tseats = tseats;
	}
	

}
