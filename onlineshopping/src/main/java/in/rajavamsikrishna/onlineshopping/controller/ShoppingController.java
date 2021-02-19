package in.rajavamsikrishna.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import in.rajavamsikrishna.onlineshopping.entity.Item;
import in.rajavamsikrishna.onlineshopping.repository.ItemRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")

public class ShoppingController {
	@Autowired
	private ItemRepository itemrepository;
		@GetMapping("/items")
		public List<Item> getAllItems(){
			return itemrepository.findAll();
		}
		@GetMapping("/items/search/{id}")
		public ResponseEntity<List<Item>> getItems(@PathVariable long id){
		List<Item> items = itemrepository.findByCategoryId(id);
		
			return ResponseEntity.ok(items);
		}

}
