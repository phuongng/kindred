import json

# Load user and caregiver data from JSON files
with open('/Users/phuongnguyen/kindred-app/src/DATABASE/user.json', 'r') as user_file:
    users = json.load(user_file)

with open('/Users/phuongnguyen/kindred-app/src/DATABASE/caregiver.json', 'r') as caregiver_file:
    caregivers = json.load(caregiver_file)

# Iterate over users to find corresponding caregivers and update appointments
for user in users:
    for appointment in user['appointments']:
        contact = appointment['contact']
        # Find the corresponding caregiver
        matching_caregiver = next((c for c in caregivers if c['email'] == contact), None)
        if matching_caregiver:
            # Check if appointment skills match caregiver skills
            appointment_skills = appointment['price_breakdown']
            caregiver_skills = matching_caregiver['caregiver']['skills']
            for skill in appointment_skills:
                skill_name = skill.split(':')[0].strip()
                skill_price = float(skill.split('$')[-1].strip())
                # Check if the skill exists in the caregiver's skills
                if skill_name not in caregiver_skills:
                    # If not, find a similar skill
                    for caregiver_skill in caregiver_skills:
                        caregiver_skill_name = caregiver_skill.split(':')[0].strip()
                        caregiver_skill_price = float(caregiver_skill.split('$')[-1].strip())
                        # Check if the skill's price matches
                        if caregiver_skill_price == skill_price:
                            appointment['price_breakdown'][appointment_skills.index(skill)] = caregiver_skill
                            break
            # Add appointment to caregiver's appointments list
            matching_caregiver['appointments'] = matching_caregiver.get('appointments', []) + [appointment]

# Save updated caregiver data to caregiver.json
with open('/Users/phuongnguyen/kindred-app/src/DATABASE/caregiver.json', 'w') as caregiver_file:
    json.dump(caregivers, caregiver_file, indent=4)
