import os
import re

def map_cards() -> dict:
    static = os.path.join(os.path.dirname(__file__), "../static")
    rarity_folders = [folder for folder in os.listdir(static)]
    card_map = {
        folder: [
            {"url" : f"static/{folder}/{card}", 
            "rarity" : folder,
            "name" : re.sub(r'\.\w+$', '', card).replace('_', ' ').replace('Card', '').strip()
            }
            for card in os.listdir(os.path.join(static, folder))
        ]
        for folder in rarity_folders
    }
    return card_map
