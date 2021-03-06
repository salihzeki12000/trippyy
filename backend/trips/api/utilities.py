import json
import requests

def addTimeAndSummary(r, key, isSingleActivity):
	data = json.loads(r.text)
	if (isSingleActivity):
		place = data["result"]

		# Adding category and recommended time ------------------------------------------
		wrapper = recommendTime(place)
		place["recommendedTime"] = wrapper[0]
		place["category"] = wrapper[1]
		
		try:
			# Adding image ------------------------------------------------------------
			photo = place["photos"][0]
			# Getting photo reference
			photoRef = photo["photo_reference"]

			# Retrieving image url through request
			url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef + "&key=" + key
			r = requests.get(url)

			# Assigning display photo to url
			place["displayPhoto"] = r.url

			return data

		except KeyError:
			# If there is no image
			return data
	else:
		for place in data["results"]:
			# Adding category and recommended time ------------------------------------------
			wrapper = recommendTime(place)
			place["recommendedTime"] = wrapper[0]
			place["category"] = wrapper[1]

			try:
				# Adding image ------------------------------------------------------------
				photo = place["photos"][0]
			
				# Getting photo reference
				photoRef = photo["photo_reference"]

				# Retrieving image url through request
				url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef + "&key=" + key
				r = requests.get(url)

				# Assigning display photo to url
				place["displayPhoto"] = r.url

			except KeyError:
				# If there is no image
				pass

			# Summary to be postponed ----------------------------------------------------------------
			# summary = getSummary(place)
			# if (len(summary) != 0):
			# 	place["summary"] = summary[0]
			# else:
			# 	place["summary"] = "No information available"
			# Summary to be postponed ----------------------------------------------------------------
			
		output = json.dumps(data)
		return output

def recommendTime(place):
	if ("amusement_park" in place["types"]):
		return [360, "amusement_park"]
	elif ("zoo" in place["types"]):
		return [360, "zoo"]
	elif ("shopping_mall" in place["types"]):
		return [180, "shopping_mall"]
	elif ("museum" in place["types"]):
		return [180, "museum"]
	elif ("park" in place["types"]):
		return [120, "park"]
	elif ("hindu_temple" in place["types"]):
		return [120, "hindu_temple"]
	elif ("church" in place["types"]):
		return [120, "church"]
	else:
		return [120, "others"]

def getSummary(place):
	name = place["name"]
	formattedName = name.replace(" ", "%20")
	summary = requests.get('http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=' + formattedName + '&exsentences=3&exlimit=1&explaintext=1&exsectionformat=wiki')
	return (extract_values(summary.json(), 'extract'))

def extract_values(obj, key):
    """Pull all values of specified key from nested JSON."""
    arr = []

    def extract(obj, arr, key):
        """Recursively search for values of key in JSON tree."""
        if isinstance(obj, dict):
            for k, v in obj.items():
                if isinstance(v, (dict, list)):
                    extract(v, arr, key)
                elif k == key:
                    arr.append(v)
        elif isinstance(obj, list):
            for item in obj:
                extract(item, arr, key)
        return arr

    results = extract(obj, arr, key)
    return results
