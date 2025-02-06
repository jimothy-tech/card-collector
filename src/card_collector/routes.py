from flask import Blueprint, request, jsonify
from card_collector.utils.map_cards import map_cards
import random


api = Blueprint("api", __name__, url_prefix="/api")

card_map = map_cards()

@api.route("/get_random_cards", methods=["GET"])
def get_random_cards():
    drawn_cards = []
    draws = int(request.args.get("draws"))
    rarity_draws = [random.randrange(1, 13) for _ in range(draws)]

    for rarity_draw in rarity_draws:
        rarity_conditions = {
            "common": 0 < rarity_draw and rarity_draw < 5,
            "uncommon": 4 < rarity_draw and rarity_draw < 9,
            "rare": 8 < rarity_draw and rarity_draw < 11,
            "ultra_rare": rarity_draw == 11,
            "legendary": rarity_draw == 12
        }

        for rarity, condition in rarity_conditions.items():
            if condition:
                draw = random.choice(
                    card_map[rarity]
                )
                drawn_cards.append(draw)
    return jsonify({"drawn_cards": drawn_cards}), 200



