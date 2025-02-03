import uuid

def generate_keys(num_keys, length):
    keys = []
    for _ in range(num_keys):
        key = str(uuid.uuid4()).replace('-', '')[:length]
        formatted_key = '-'.join([key[i:i+4] for i in range(0, len(key), 4)])
        keys.append(formatted_key)
    return keys


num_keys = 50
length = 15
keys = generate_keys(num_keys, length)


for key in keys:
    print(key)