from flask import Flask, render_template, request, Response, redirect, url_for
from flask_wtf import FlaskForm
from flask_bootstrap import Bootstrap5
from wtforms import StringField, SubmitField, SelectField, IntegerField, TextAreaField
from flask_ckeditor import CKEditor
from wtforms.validators import DataRequired, URL, NumberRange
from flask_ckeditor import CKEditor, CKEditorField
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'FLASK_KEY'  # Change this to a random secret key
ckeditor = CKEditor(app)
Bootstrap5(app)


class WriteForm(FlaskForm):
    # minutes = StringField('minutes', validators=[DataRequired()])
    body = TextAreaField("", validators=[DataRequired()])
    submit = SubmitField("Save your Writing!")

class InputForm(FlaskForm):
    # minutes = StringField('minutes', validators=[DataRequired()])
    minutes = IntegerField("", validators=[NumberRange(min=0, max=10)])
    submit = SubmitField("Start writing!")




@app.route('/', methods=["GET", "POST"])
def index():
    input_form = InputForm()
    # if request.method == 'POST':
    #     if request.form.get('start_writing_button'):
    #         minutes = request.form["minutes"]
    #         print(minutes)
    #     return redirect(url_for('write'))
    if input_form.validate_on_submit():
        return redirect(url_for("write", minutes = input_form.minutes.data))
    return render_template('index.html', form=input_form)

@app.route('/write/<int:minutes>', methods=["GET", "POST"])
def write(minutes):
    write_form = WriteForm()
    print(minutes)
    if write_form.validate_on_submit():
        words = write_form.body.data
        print(words)
        with open("writing.txt", "w") as fo:
            fo.write(words)

        return redirect(url_for('index'))
    #     return render_template('write_form.html',  minutes=minutes, form=form,  num=minutes)
    return render_template('write_form.html', form=write_form, num=minutes)



if __name__ == "__main__":
    app.run(debug=True, port=5003)
