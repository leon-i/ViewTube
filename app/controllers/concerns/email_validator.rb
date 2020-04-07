class EmailValidator < ActiveModel::Validator
    def validate(record)
        if (!record.email.include?('@'))
            record.errors.add(:email, 'Please provide a valid email')
        end
    end
end