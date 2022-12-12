<?php

class Products{

    public function __construct()
    {
    }

    public function getProducts(){
        $products = $db->query("SELECT * FROM prekes"); //json
        while ($row= $products->fetch_assoc()) {
            $productid = $row['id'];
            $image = $row['src'];
            //isrikiuot prekes su ant kiekvienos form ir siuncia id 
            //TODO: cia turetu ta grazu blokiuka rodyt, kaip susiet?
            ?>
            <!-- <img style='margin-left:10px' src="<?php echo $image ?>"  height="200px" /> -->
            <?php
        }
    }
}

?>